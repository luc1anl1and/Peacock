using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace HitmanPatcher;

public class MainForm : Form, ILoggingProvider
{
	private bool patchingEnabled;

	public void SetPatchingEnabled(bool enabled)
	{
		patchingEnabled = enabled;
		buttonRepatch.Enabled = enabled;
	}

	public void UseLocalServer(int port)
	{
		SetSelectedServerHostname("127.0.0.1" + (port == 80 ? "" : ":" + port));
		_currentSettings.patchOptions.UseHttp = true;
	}
	private static MainForm instance;

	private static readonly Dictionary<string, string> servers = new Dictionary<string, string>
	{
		{ "IOI Official", "config.hitman.io" },
		{ "Peacock Local", "127.0.0.1" }
	};

	private static readonly Dictionary<string, string> serversReverse = servers.ToDictionary((KeyValuePair<string, string> kvp) => kvp.Value, (KeyValuePair<string, string> kvp) => kvp.Key);

	private Settings _currentSettings;

	private IContainer components;

	private Label serverAddressLabel;

	private ListView logListView;

	private ColumnHeader columnHeader1;

	private Label logLabel;

	private Button buttonRepatch;

	private ComboBox serverUrlComboBox;

	private LinkLabel localghostLinkLabel;

	private Button buttonOptions;

	private Label basedOnLabel;

	private Label statusLabel;

	private PictureBox novikovPictureBox;

	private NotifyIcon trayIcon;

	private ContextMenuStrip trayMenu;

	private ToolStripMenuItem menuItemExit;

	private ToolStripMenuItem menuItemRepatch;

	private ToolStripMenuItem domainsTrayMenu;

	private ToolStripMenuItem menuItemOpen;

	private ContextMenuStrip logContextMenu;

	private ToolStripMenuItem copyLogToClipboardToolStripMenuItem;

	private Settings CurrentSettings
	{
		get
		{
			_currentSettings.patchOptions.CustomConfigDomain = GetSelectedServerHostname();
			return _currentSettings;
		}
		set
		{
			_currentSettings = value;
			SetSelectedServerHostname(value.patchOptions.CustomConfigDomain);
			serverUrlComboBox.Items.Clear();
			serverUrlComboBox.Items.AddRange(((IEnumerable<object>)servers.Keys).ToArray());
		}
	}

	public static MainForm GetInstance()
	{
		return instance ?? (instance = new MainForm());
	}

	private void ToggleTheme(bool darkModeEnabled)
	{
		BackColor = (darkModeEnabled ? Color.FromArgb(24, 26, 27) : SystemColors.Control);
		serverAddressLabel.ForeColor = (darkModeEnabled ? Color.White : SystemColors.ControlText);
		logLabel.ForeColor = (darkModeEnabled ? Color.White : SystemColors.ControlText);
		basedOnLabel.ForeColor = (darkModeEnabled ? Color.White : SystemColors.ControlText);
		statusLabel.ForeColor = (darkModeEnabled ? Color.White : SystemColors.ControlText);
		localghostLinkLabel.LinkColor = (darkModeEnabled ? Color.FromArgb(50, 115, 234) : Color.FromArgb(0, 0, 255));
		logListView.BackColor = (darkModeEnabled ? Color.FromArgb(19, 21, 22) : SystemColors.Window);
		logListView.ForeColor = (darkModeEnabled ? Color.White : SystemColors.WindowText);
		serverUrlComboBox.FlatStyle = ((!darkModeEnabled) ? FlatStyle.Standard : FlatStyle.Flat);
		serverUrlComboBox.BackColor = (darkModeEnabled ? Color.FromArgb(19, 21, 22) : SystemColors.Window);
		serverUrlComboBox.ForeColor = (darkModeEnabled ? Color.White : SystemColors.ControlText);
		buttonRepatch.FlatStyle = ((!darkModeEnabled) ? FlatStyle.Standard : FlatStyle.Flat);
		buttonRepatch.BackColor = (darkModeEnabled ? Color.FromArgb(19, 21, 22) : SystemColors.Control);
		buttonRepatch.ForeColor = (darkModeEnabled ? Color.White : SystemColors.ControlText);
		buttonOptions.FlatStyle = ((!darkModeEnabled) ? FlatStyle.Standard : FlatStyle.Flat);
		buttonOptions.BackColor = (darkModeEnabled ? Color.FromArgb(19, 21, 22) : SystemColors.Control);
		buttonOptions.ForeColor = (darkModeEnabled ? Color.White : SystemColors.ControlText);
	}

	public MainForm()
	{
		Compositions.Logger = this;
		InitializeComponent();
		logListView.Columns[0].Width = logListView.Width - 4 - SystemInformation.VerticalScrollBarWidth;
		Timer timer = new Timer();
		timer.Interval = 1000;
		timer.Tick += (object sender, EventArgs args) =>
		{
			if (patchingEnabled) MemoryPatcher.PatchAllProcesses(this, CurrentSettings.patchOptions);
		};
		timer.Enabled = true;
		try
		{
			CurrentSettings = Settings.GetFromFile();
		}
		catch (Exception)
		{
			CurrentSettings = new Settings();
		}
		updateTrayDomains();
		ToggleTheme(CurrentSettings.darkModeEnabled);
		log("Patcher ready; waiting for the local server.");
		if (CurrentSettings.startInTray)
		{
			trayIcon.Visible = true;
			WindowState = FormWindowState.Minimized;
			Hide();
			ShowInTaskbar = false;
			trayIcon.ShowBalloonTip(5000, "Peacock", "The Peacock Patcher has been started in the tray.", ToolTipIcon.Info);
		}
	}

	public void log(string msg)
	{
		if (msg.Contains("Failed to patch"))
		{
			SetStatusImage(-1);
		}
		if (msg.Contains("Successfully patched"))
		{
			SetStatusImage(1);
		}
		string[] array = msg.Split('\n');
		foreach (string arg in array)
		{
			logListView.Items.Insert(0, $"[{DateTime.Now:HH:mm:ss}] - {arg}");
		}
		while (logListView.Items.Count > 1000) logListView.Items.RemoveAt(logListView.Items.Count - 1);
	}

	private void RePatchButton_Click(object sender, EventArgs e)
	{
		MemoryPatcher.patchedprocesses.Clear();
		SetStatusImage(0);
	}

	private void MainForm_FormClosing(object sender, FormClosingEventArgs e)
	{
		if (!Directory.Exists(Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData) + "\\PeacockProject"))
		{
			Directory.CreateDirectory(Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData) + "\\PeacockProject");
		}
		CurrentSettings.SaveToFile();
	}

	private string GetSelectedServerHostname()
	{
		if (!servers.TryGetValue(serverUrlComboBox.Text, out var value))
		{
			value = serverUrlComboBox.Text;
		}
		if (string.IsNullOrEmpty(value))
		{
			value = "localhost";
		}
		return value;
	}

	private void SetSelectedServerHostname(string input)
	{
		if (!serversReverse.TryGetValue(input, out var value))
		{
			value = input;
		}
		serverUrlComboBox.Text = value;
	}

	private void LocalghostLink_LinkClicked(object sender, LinkLabelLinkClickedEventArgs e)
	{
		Process.Start("https://gitlab.com/grappigegovert/localghost");
	}

	private void ButtonOptions_Click(object sender, EventArgs e)
	{
		OptionsForm optionsForm = new OptionsForm(CurrentSettings);
		if (optionsForm.ShowDialog() == DialogResult.OK)
		{
			CurrentSettings = optionsForm.Settings;
			updateTrayDomains();
			ToggleTheme(CurrentSettings.darkModeEnabled);
		}
	}

	private void MainForm_Resize(object sender, EventArgs e)
	{
		if (WindowState == FormWindowState.Minimized && CurrentSettings.minimizeToTray)
		{
			Hide();
			ShowInTaskbar = false;
			trayIcon.Visible = true;
			trayIcon.ShowBalloonTip(5000, "Peacock", "The Peacock Patcher has been minimized to the tray.", ToolTipIcon.Info);
		}
		else
		{
			logListView.Columns[0].Width = logListView.Width - 4 - SystemInformation.VerticalScrollBarWidth;
		}
	}

	private void SetStatusImage(int status)
	{
		if (status == 0)
		{
			novikovPictureBox.Image = Resources.Novikov_standard;
		}
		else if (status > 0)
		{
			novikovPictureBox.Image = Resources.Novikov_success;
		}
		else
		{
			novikovPictureBox.Image = Resources.Novikov_error;
		}
	}

	private void menuItemOpen_Click(object sender, EventArgs e)
	{
		Visible = true;
		WindowState = FormWindowState.Normal;
		Focus();
		ShowInTaskbar = true;
		trayIcon.Visible = false;
	}

	private void menuItemExit_Click(object sender, EventArgs e)
	{
		Application.Exit();
	}

	private void domainItem_Click(object sender, EventArgs e)
	{
		if (!(sender is ToolStripMenuItem toolStripMenuItem))
		{
			return;
		}
		foreach (ToolStripMenuItem dropDownItem in domainsTrayMenu.DropDownItems)
		{
			if (dropDownItem == toolStripMenuItem)
			{
				dropDownItem.Checked = true;
			}
			else
			{
				dropDownItem.Checked = false;
			}
		}
		SetSelectedServerHostname(toolStripMenuItem.Text);
	}

	private void updateTrayDomains()
	{
		domainsTrayMenu.DropDownItems.Clear();
		foreach (string trayDomain in CurrentSettings.trayDomains)
		{
			if (!string.IsNullOrWhiteSpace(trayDomain))
			{
				ToolStripMenuItem toolStripMenuItem = new ToolStripMenuItem();
				toolStripMenuItem.Text = trayDomain;
				toolStripMenuItem.Click += domainItem_Click;
				domainsTrayMenu.DropDownItems.Add(toolStripMenuItem);
			}
		}
	}

	private void copyLogToClipboardToolStripMenuItem_Click(object sender, EventArgs e)
	{
		StringBuilder stringBuilder = new StringBuilder();
		foreach (ListViewItem item in logListView.Items)
		{
			stringBuilder.AppendLine(item.Text);
		}
		Clipboard.SetText(stringBuilder.ToString());
	}

	protected override void Dispose(bool disposing)
	{
		if (disposing && components != null)
		{
			components.Dispose();
		}
		base.Dispose(disposing);
	}

	private void InitializeComponent()
	{
		this.components = new System.ComponentModel.Container();
		this.serverAddressLabel = new System.Windows.Forms.Label();
		this.logListView = new System.Windows.Forms.ListView();
		this.columnHeader1 = new System.Windows.Forms.ColumnHeader();
		this.logContextMenu = new System.Windows.Forms.ContextMenuStrip(this.components);
		this.copyLogToClipboardToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
		this.logLabel = new System.Windows.Forms.Label();
		this.buttonRepatch = new System.Windows.Forms.Button();
		this.serverUrlComboBox = new System.Windows.Forms.ComboBox();
		this.localghostLinkLabel = new System.Windows.Forms.LinkLabel();
		this.buttonOptions = new System.Windows.Forms.Button();
		this.basedOnLabel = new System.Windows.Forms.Label();
		this.statusLabel = new System.Windows.Forms.Label();
		this.novikovPictureBox = new System.Windows.Forms.PictureBox();
		this.trayIcon = new System.Windows.Forms.NotifyIcon(this.components);
		this.trayMenu = new System.Windows.Forms.ContextMenuStrip(this.components);
		this.menuItemOpen = new System.Windows.Forms.ToolStripMenuItem();
		this.menuItemRepatch = new System.Windows.Forms.ToolStripMenuItem();
		this.domainsTrayMenu = new System.Windows.Forms.ToolStripMenuItem();
		this.menuItemExit = new System.Windows.Forms.ToolStripMenuItem();
		this.logContextMenu.SuspendLayout();
		((System.ComponentModel.ISupportInitialize)this.novikovPictureBox).BeginInit();
		this.trayMenu.SuspendLayout();
		base.SuspendLayout();
		this.serverAddressLabel.AccessibleDescription = "Server address label.";
		this.serverAddressLabel.AccessibleName = "Server address";
		this.serverAddressLabel.AutoSize = true;
		this.serverAddressLabel.Location = new System.Drawing.Point(9, 15);
		this.serverAddressLabel.Name = "serverAddressLabel";
		this.serverAddressLabel.Size = new System.Drawing.Size(103, 16);
		this.serverAddressLabel.TabIndex = 0;
		this.serverAddressLabel.Text = "Server address:";
		this.logListView.AccessibleDescription = "Patcher log";
		this.logListView.AccessibleName = "Log";
		this.logListView.Anchor = System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left | System.Windows.Forms.AnchorStyles.Right;
		this.logListView.Columns.AddRange(new System.Windows.Forms.ColumnHeader[1] { this.columnHeader1 });
		this.logListView.ContextMenuStrip = this.logContextMenu;
		this.logListView.FullRowSelect = true;
		this.logListView.HeaderStyle = System.Windows.Forms.ColumnHeaderStyle.None;
		this.logListView.HideSelection = false;
		this.logListView.Location = new System.Drawing.Point(12, 81);
		this.logListView.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
		this.logListView.Name = "logListView";
		this.logListView.Size = new System.Drawing.Size(402, 106);
		this.logListView.TabIndex = 2;
		this.logListView.UseCompatibleStateImageBehavior = false;
		this.logListView.View = System.Windows.Forms.View.Details;
		this.columnHeader1.Width = 300;
		this.logContextMenu.AccessibleDescription = "Patcher log context menu";
		this.logContextMenu.AccessibleName = "Log context";
		this.logContextMenu.BackColor = System.Drawing.SystemColors.Control;
		this.logContextMenu.ImageScalingSize = new System.Drawing.Size(20, 20);
		this.logContextMenu.Items.AddRange(new System.Windows.Forms.ToolStripItem[1] { this.copyLogToClipboardToolStripMenuItem });
		this.logContextMenu.Name = "logContextMenu";
		this.logContextMenu.Size = new System.Drawing.Size(225, 28);
		this.copyLogToClipboardToolStripMenuItem.AccessibleDescription = "Action for copying patcher logs to the clipboard.";
		this.copyLogToClipboardToolStripMenuItem.AccessibleName = "Copy log to clipboard action";
		this.copyLogToClipboardToolStripMenuItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Text;
		this.copyLogToClipboardToolStripMenuItem.Name = "copyLogToClipboardToolStripMenuItem";
		this.copyLogToClipboardToolStripMenuItem.Size = new System.Drawing.Size(224, 24);
		this.copyLogToClipboardToolStripMenuItem.Text = "Copy log to clipboard";
		this.copyLogToClipboardToolStripMenuItem.Click += new System.EventHandler(this.copyLogToClipboardToolStripMenuItem_Click);
		this.logLabel.AutoSize = true;
		this.logLabel.Location = new System.Drawing.Point(9, 50);
		this.logLabel.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
		this.logLabel.Name = "logLabel";
		this.logLabel.Size = new System.Drawing.Size(33, 16);
		this.logLabel.TabIndex = 3;
		this.logLabel.Text = "Log:";
		this.buttonRepatch.Anchor = System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right;
		this.buttonRepatch.Location = new System.Drawing.Point(313, 11);
		this.buttonRepatch.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
		this.buttonRepatch.Name = "buttonRepatch";
		this.buttonRepatch.Size = new System.Drawing.Size(101, 28);
		this.buttonRepatch.TabIndex = 1;
		this.buttonRepatch.Text = "Re-patch";
		this.buttonRepatch.UseVisualStyleBackColor = true;
		this.buttonRepatch.Click += new System.EventHandler(this.RePatchButton_Click);
		this.serverUrlComboBox.AccessibleDescription = "";
		this.serverUrlComboBox.AccessibleName = "Server address picker";
		this.serverUrlComboBox.Anchor = System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Left | System.Windows.Forms.AnchorStyles.Right;
		this.serverUrlComboBox.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
		this.serverUrlComboBox.FormattingEnabled = true;
		this.serverUrlComboBox.Location = new System.Drawing.Point(127, 12);
		this.serverUrlComboBox.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
		this.serverUrlComboBox.MaxLength = 150;
		this.serverUrlComboBox.Name = "serverUrlComboBox";
		this.serverUrlComboBox.Size = new System.Drawing.Size(180, 24);
		this.serverUrlComboBox.TabIndex = 0;
		this.localghostLinkLabel.AccessibleDescription = "Link to LocalGhost GitLab repository.";
		this.localghostLinkLabel.AccessibleName = "LocalGhost link";
		this.localghostLinkLabel.Anchor = System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right;
		this.localghostLinkLabel.AutoSize = true;
		this.localghostLinkLabel.Location = new System.Drawing.Point(225, 202);
		this.localghostLinkLabel.Name = "localghostLinkLabel";
		this.localghostLinkLabel.Size = new System.Drawing.Size(189, 16);
		this.localghostLinkLabel.TabIndex = 3;
		this.localghostLinkLabel.TabStop = true;
		this.localghostLinkLabel.Text = "LocalGhost by grappigegovert";
		this.localghostLinkLabel.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
		this.localghostLinkLabel.LinkClicked += new System.Windows.Forms.LinkLabelLinkClickedEventHandler(this.LocalghostLink_LinkClicked);
		this.buttonOptions.AccessibleDescription = "Button that opens the options menu.";
		this.buttonOptions.AccessibleName = "Options button";
		this.buttonOptions.Anchor = System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left;
		this.buttonOptions.Location = new System.Drawing.Point(12, 194);
		this.buttonOptions.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
		this.buttonOptions.Name = "buttonOptions";
		this.buttonOptions.Size = new System.Drawing.Size(93, 33);
		this.buttonOptions.TabIndex = 2;
		this.buttonOptions.Text = "Options";
		this.buttonOptions.UseVisualStyleBackColor = true;
		this.buttonOptions.Click += new System.EventHandler(this.ButtonOptions_Click);
		this.basedOnLabel.AccessibleName = "Based on";
		this.basedOnLabel.Anchor = System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right;
		this.basedOnLabel.AutoSize = true;
		this.basedOnLabel.Location = new System.Drawing.Point(153, 202);
		this.basedOnLabel.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
		this.basedOnLabel.Name = "basedOnLabel";
		this.basedOnLabel.Size = new System.Drawing.Size(65, 16);
		this.basedOnLabel.TabIndex = 9;
		this.basedOnLabel.Text = "Based on";
		this.basedOnLabel.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
		this.statusLabel.Anchor = System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right;
		this.statusLabel.AutoSize = true;
		this.statusLabel.Location = new System.Drawing.Point(260, 50);
		this.statusLabel.Name = "statusLabel";
		this.statusLabel.Size = new System.Drawing.Size(47, 16);
		this.statusLabel.TabIndex = 10;
		this.statusLabel.Text = "Status:";
		this.novikovPictureBox.AccessibleDescription = "Icon showing the patcher status.";
		this.novikovPictureBox.AccessibleName = "Status icon";
		this.novikovPictureBox.Anchor = System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right;
		this.novikovPictureBox.Image = HitmanPatcher.Resources.Novikov_standard;
		this.novikovPictureBox.InitialImage = HitmanPatcher.Resources.Novikov_standard;
		this.novikovPictureBox.Location = new System.Drawing.Point(313, 44);
		this.novikovPictureBox.Margin = new System.Windows.Forms.Padding(4);
		this.novikovPictureBox.Name = "novikovPictureBox";
		this.novikovPictureBox.Size = new System.Drawing.Size(45, 31);
		this.novikovPictureBox.SizeMode = System.Windows.Forms.PictureBoxSizeMode.Zoom;
		this.novikovPictureBox.TabIndex = 11;
		this.novikovPictureBox.TabStop = false;
		this.trayIcon.ContextMenuStrip = this.trayMenu;
		this.trayIcon.Icon = HitmanPatcher.Resources.Icon;
		this.trayIcon.Text = "Peacock";
		this.trayIcon.MouseDoubleClick += new System.Windows.Forms.MouseEventHandler(this.menuItemOpen_Click);
		this.trayMenu.ImageScalingSize = new System.Drawing.Size(20, 20);
		this.trayMenu.Items.AddRange(new System.Windows.Forms.ToolStripItem[4] { this.menuItemOpen, this.menuItemRepatch, this.domainsTrayMenu, this.menuItemExit });
		this.trayMenu.Name = "trayMenu";
		this.trayMenu.Size = new System.Drawing.Size(173, 100);
		this.menuItemOpen.Font = new System.Drawing.Font("Segoe UI", 9f, System.Drawing.FontStyle.Bold);
		this.menuItemOpen.Name = "menuItemOpen";
		this.menuItemOpen.Size = new System.Drawing.Size(172, 24);
		this.menuItemOpen.Text = "&Open Peacock";
		this.menuItemOpen.Click += new System.EventHandler(this.menuItemOpen_Click);
		this.menuItemRepatch.Name = "menuItemRepatch";
		this.menuItemRepatch.Size = new System.Drawing.Size(172, 24);
		this.menuItemRepatch.Text = "&Re-patch";
		this.menuItemRepatch.Click += new System.EventHandler(this.RePatchButton_Click);
		this.domainsTrayMenu.Name = "domainsTrayMenu";
		this.domainsTrayMenu.Size = new System.Drawing.Size(172, 24);
		this.domainsTrayMenu.Text = "Set &Domain";
		this.menuItemExit.Name = "menuItemExit";
		this.menuItemExit.Size = new System.Drawing.Size(172, 24);
		this.menuItemExit.Text = "&Exit";
		this.menuItemExit.Click += new System.EventHandler(this.menuItemExit_Click);
		base.AccessibleName = "Peacock";
		base.AutoScaleDimensions = new System.Drawing.SizeF(8f, 16f);
		base.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
		this.BackColor = System.Drawing.SystemColors.Control;
		base.ClientSize = new System.Drawing.Size(429, 233);
		base.Controls.Add(this.novikovPictureBox);
		base.Controls.Add(this.statusLabel);
		base.Controls.Add(this.basedOnLabel);
		base.Controls.Add(this.buttonOptions);
		base.Controls.Add(this.localghostLinkLabel);
		base.Controls.Add(this.serverUrlComboBox);
		base.Controls.Add(this.buttonRepatch);
		base.Controls.Add(this.logLabel);
		base.Controls.Add(this.logListView);
		base.Controls.Add(this.serverAddressLabel);
		base.Icon = HitmanPatcher.Resources.Icon;
		base.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
		base.MaximizeBox = false;
		this.MinimumSize = new System.Drawing.Size(423, 238);
		base.Name = "MainForm";
		this.Text = "Peacock";
		base.FormClosing += new System.Windows.Forms.FormClosingEventHandler(this.MainForm_FormClosing);
		base.Resize += new System.EventHandler(this.MainForm_Resize);
		this.logContextMenu.ResumeLayout(false);
		((System.ComponentModel.ISupportInitialize)this.novikovPictureBox).EndInit();
		this.trayMenu.ResumeLayout(false);
		base.ResumeLayout(false);
		base.PerformLayout();
	}
}
