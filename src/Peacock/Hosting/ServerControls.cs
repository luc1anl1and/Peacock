using System;
using System.Diagnostics;
using System.Drawing;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;
using HitmanPatcher;

namespace Peacock.Hosting
{
    internal sealed class ServerControls : IDisposable
    {
        private readonly MainForm form;
        private readonly ServerHost host;
        private readonly CancellationTokenSource lifetime = new CancellationTokenSource();
        private readonly Label status;
        private readonly Button toggle;
        private readonly Button browser;
        private bool closed;

        public ServerControls(MainForm form, ServerHost host)
        {
            this.form = form;
            this.host = host;
            form.SetPatchingEnabled(false);
            form.UseLocalServer(host.Port);
            form.Text = "Peacock — Server and Patcher";
            form.SuspendLayout();
            var controls = form.Controls.Cast<Control>().Select(control => new { Control = control, Bounds = control.Bounds }).ToArray();
            form.ClientSize = new Size(form.ClientSize.Width, form.ClientSize.Height + 80);
            form.MinimumSize = new Size(form.MinimumSize.Width, form.MinimumSize.Height + 80);
            foreach (var item in controls)
                item.Control.Bounds = new Rectangle(item.Bounds.X, item.Bounds.Y + 80, item.Bounds.Width, item.Bounds.Height);
            var panel = new Panel { Location = Point.Empty, Size = new Size(form.ClientSize.Width, 78), Anchor = AnchorStyles.Top | AnchorStyles.Left | AnchorStyles.Right };
            status = new Label { Text = "Local server: starting…", Location = new Point(12, 8), Size = new Size(400, 20), AutoEllipsis = true, Anchor = AnchorStyles.Top | AnchorStyles.Left | AnchorStyles.Right };
            toggle = new Button { Text = "Start server", Location = new Point(12, 34), Size = new Size(115, 30), Enabled = false };
            browser = new Button { Text = "Open web interface", Location = new Point(137, 34), Size = new Size(155, 30), Enabled = false };
            panel.Controls.AddRange(new Control[] { status, toggle, browser });
            form.Controls.Add(panel);
            form.ResumeLayout();
            toggle.Click += async (sender, args) => { if (host.IsRunning) await Stop(); else await Start(); };
            browser.Click += (sender, args) => Process.Start(host.Url);
            host.Output += line => OnUi(() => form.log("[Server] " + line));
            host.UnexpectedExit += () => OnUi(() => { SetRunning(false); form.log("[Server] Stopped unexpectedly. Check the log, then click Start server."); });
            form.Shown += async (sender, args) => await Start();
            form.FormClosing += OnClosing;
        }

        private async Task Start()
        {
            toggle.Enabled = false;
            status.Text = "Local server: starting…";
            try
            {
                await host.StartAsync(lifetime.Token);
                if (!lifetime.IsCancellationRequested) SetRunning(true);
            }
            catch (OperationCanceledException) { }
            catch (Exception error)
            {
                if (!lifetime.IsCancellationRequested)
                {
                    SetRunning(false);
                    status.Text = "Local server: startup failed";
                    form.log("[Server] " + error.Message);
                }
            }
        }

        private async Task Stop()
        {
            form.SetPatchingEnabled(false);
            toggle.Enabled = browser.Enabled = false;
            status.Text = "Local server: stopping…";
            try { await host.StopAsync(); }
            finally { if (!lifetime.IsCancellationRequested) SetRunning(false); }
        }

        private void SetRunning(bool running)
        {
            form.SetPatchingEnabled(running);
            toggle.Text = running ? "Stop server" : "Start server";
            toggle.Enabled = true;
            browser.Enabled = running;
            status.Text = running ? "Local server: running at " + host.Url : "Local server: stopped";
        }

        private void OnUi(Action action)
        {
            if (form.IsDisposed || !form.IsHandleCreated) return;
            try { form.BeginInvoke(new Action(() => { if (!form.IsDisposed && !lifetime.IsCancellationRequested) action(); })); }
            catch (InvalidOperationException) { }
        }

        private async void OnClosing(object sender, FormClosingEventArgs args)
        {
            if (closed) return;
            args.Cancel = true;
            lifetime.Cancel();
            form.SetPatchingEnabled(false);
            try { await host.StopAsync(); }
            finally { closed = true; form.BeginInvoke(new Action(form.Close)); }
        }

        public void Dispose()
        {
            lifetime.Cancel();
            host.Dispose();
            lifetime.Dispose();
        }
    }
}
