using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Windows.Forms;

namespace HitmanPatcher;

public class OptionsForm : Form
{
	private string customDomain;

	private bool startInTray;

	private bool minimizeToTray;

	private List<string> trayDomains;

	private IContainer components;

	private Button buttonTrayOptions;

	private Button buttonSave;

	private Button buttonCancel;

	private GroupBox groupBox1;

	private CheckBox checkBoxHttp;

	private CheckBox dynResources;

	private CheckBox darkModeBox;

	public Settings Settings
	{
		get
		{
			return new Settings
			{
				patchOptions = new MemoryPatcher.Options
				{
					CustomConfigDomain = customDomain,
					UseHttp = checkBoxHttp.Checked,
					EnableDynamicResources = true,
					DisableForceOfflineOnFailedDynamicResources = dynResources.Checked,
					DisableCertPinning = true,
					SetCustomConfigDomain = true,
					AlwaysSendAuthHeader = true
				},
				darkModeEnabled = darkModeBox.Checked,
				startInTray = startInTray,
				minimizeToTray = minimizeToTray,
				trayDomains = trayDomains
			};
		}
		private set
		{
			customDomain = value.patchOptions.CustomConfigDomain;
			checkBoxHttp.Checked = value.patchOptions.UseHttp;
			dynResources.Checked = value.patchOptions.DisableForceOfflineOnFailedDynamicResources;
			darkModeBox.Checked = value.darkModeEnabled;
			startInTray = value.startInTray;
			minimizeToTray = value.minimizeToTray;
			trayDomains = value.trayDomains;
		}
	}

	private void toggleTheme(bool darkModeEnabled)
	{
		BackColor = (darkModeEnabled ? Color.FromArgb(24, 26, 27) : SystemColors.Control);
		groupBox1.BackColor = (darkModeEnabled ? Color.FromArgb(24, 26, 27) : SystemColors.Control);
		groupBox1.ForeColor = (darkModeEnabled ? Color.White : SystemColors.ControlText);
		buttonSave.FlatStyle = ((!darkModeEnabled) ? FlatStyle.Standard : FlatStyle.Flat);
		buttonSave.BackColor = (darkModeEnabled ? Color.FromArgb(19, 21, 22) : SystemColors.Control);
		buttonSave.ForeColor = (darkModeEnabled ? Color.White : SystemColors.ControlText);
		buttonCancel.FlatStyle = ((!darkModeEnabled) ? FlatStyle.Standard : FlatStyle.Flat);
		buttonCancel.BackColor = (darkModeEnabled ? Color.FromArgb(19, 21, 22) : SystemColors.Control);
		buttonCancel.ForeColor = (darkModeEnabled ? Color.White : SystemColors.ControlText);
		buttonTrayOptions.FlatStyle = ((!darkModeEnabled) ? FlatStyle.Standard : FlatStyle.Flat);
		buttonTrayOptions.BackColor = (darkModeEnabled ? Color.FromArgb(19, 21, 22) : SystemColors.Control);
		buttonTrayOptions.ForeColor = (darkModeEnabled ? Color.White : SystemColors.ControlText);
	}

	public OptionsForm(Settings currentSettings)
	{
		InitializeComponent();
		Settings = currentSettings;
		startInTray = Settings.startInTray;
		minimizeToTray = Settings.minimizeToTray;
		trayDomains = Settings.trayDomains;
		toggleTheme(Settings.darkModeEnabled);
	}

	private void ButtonCancel_Click(object sender, EventArgs e)
	{
		DialogResult = DialogResult.Cancel;
		Close();
	}

	private void ButtonSave_Click(object sender, EventArgs e)
	{
		DialogResult = DialogResult.OK;
		Close();
	}

	private void buttonTrayOptions_Click(object sender, EventArgs e)
	{
		TrayOptionsForm trayOptionsForm = new TrayOptionsForm(startInTray, minimizeToTray, trayDomains, Settings.darkModeEnabled);
		if (trayOptionsForm.ShowDialog() == DialogResult.OK)
		{
			startInTray = trayOptionsForm.startInTray;
			minimizeToTray = trayOptionsForm.minimizeToTray;
			trayDomains = trayOptionsForm.trayDomains;
		}
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
		this.buttonSave = new System.Windows.Forms.Button();
		this.buttonCancel = new System.Windows.Forms.Button();
		this.groupBox1 = new System.Windows.Forms.GroupBox();
		this.darkModeBox = new System.Windows.Forms.CheckBox();
		this.dynResources = new System.Windows.Forms.CheckBox();
		this.checkBoxHttp = new System.Windows.Forms.CheckBox();
		this.buttonTrayOptions = new System.Windows.Forms.Button();
		this.groupBox1.SuspendLayout();
		base.SuspendLayout();
		this.buttonSave.Anchor = System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right;
		this.buttonSave.Location = new System.Drawing.Point(302, 55);
		this.buttonSave.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
		this.buttonSave.Name = "buttonSave";
		this.buttonSave.Size = new System.Drawing.Size(166, 32);
		this.buttonSave.TabIndex = 4;
		this.buttonSave.Text = "Save";
		this.buttonSave.UseVisualStyleBackColor = true;
		this.buttonSave.Click += new System.EventHandler(this.ButtonSave_Click);
		this.buttonCancel.Anchor = System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right;
		this.buttonCancel.Location = new System.Drawing.Point(302, 91);
		this.buttonCancel.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
		this.buttonCancel.Name = "buttonCancel";
		this.buttonCancel.Size = new System.Drawing.Size(166, 32);
		this.buttonCancel.TabIndex = 5;
		this.buttonCancel.Text = "Cancel";
		this.buttonCancel.UseVisualStyleBackColor = true;
		this.buttonCancel.Click += new System.EventHandler(this.ButtonCancel_Click);
		this.groupBox1.Anchor = System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left;
		this.groupBox1.Controls.Add(this.darkModeBox);
		this.groupBox1.Controls.Add(this.dynResources);
		this.groupBox1.Controls.Add(this.checkBoxHttp);
		this.groupBox1.Location = new System.Drawing.Point(12, 12);
		this.groupBox1.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
		this.groupBox1.Name = "groupBox1";
		this.groupBox1.Padding = new System.Windows.Forms.Padding(3, 2, 3, 2);
		this.groupBox1.Size = new System.Drawing.Size(284, 167);
		this.groupBox1.TabIndex = 2;
		this.groupBox1.TabStop = false;
		this.groupBox1.Text = "Patcher Options";
		this.darkModeBox.AutoSize = true;
		this.darkModeBox.Location = new System.Drawing.Point(5, 73);
		this.darkModeBox.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
		this.darkModeBox.Name = "darkModeBox";
		this.darkModeBox.Size = new System.Drawing.Size(140, 20);
		this.darkModeBox.TabIndex = 2;
		this.darkModeBox.Text = "Enable dark mode";
		this.darkModeBox.UseVisualStyleBackColor = true;
		this.dynResources.AutoSize = true;
		this.dynResources.Location = new System.Drawing.Point(5, 47);
		this.dynResources.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
		this.dynResources.Name = "dynResources";
		this.dynResources.Size = new System.Drawing.Size(231, 20);
		this.dynResources.TabIndex = 1;
		this.dynResources.Text = "Make dynamic resources optional";
		this.dynResources.UseVisualStyleBackColor = true;
		this.checkBoxHttp.AutoSize = true;
		this.checkBoxHttp.Location = new System.Drawing.Point(5, 21);
		this.checkBoxHttp.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
		this.checkBoxHttp.Name = "checkBoxHttp";
		this.checkBoxHttp.Size = new System.Drawing.Size(170, 20);
		this.checkBoxHttp.TabIndex = 0;
		this.checkBoxHttp.Text = "Use http instead of https";
		this.checkBoxHttp.UseVisualStyleBackColor = true;
		this.buttonTrayOptions.AccessibleDescription = "A button that opens the tray options.";
		this.buttonTrayOptions.AccessibleName = "Tray Options";
		this.buttonTrayOptions.Anchor = System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right;
		this.buttonTrayOptions.Location = new System.Drawing.Point(302, 18);
		this.buttonTrayOptions.Name = "buttonTrayOptions";
		this.buttonTrayOptions.Size = new System.Drawing.Size(166, 32);
		this.buttonTrayOptions.TabIndex = 3;
		this.buttonTrayOptions.Text = "Tray Options";
		this.buttonTrayOptions.UseVisualStyleBackColor = true;
		this.buttonTrayOptions.Click += new System.EventHandler(this.buttonTrayOptions_Click);
		base.AccessibleName = "Advanced options menu";
		base.AutoScaleDimensions = new System.Drawing.SizeF(8f, 16f);
		base.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
		base.ClientSize = new System.Drawing.Size(479, 190);
		base.Controls.Add(this.buttonTrayOptions);
		base.Controls.Add(this.groupBox1);
		base.Controls.Add(this.buttonCancel);
		base.Controls.Add(this.buttonSave);
		base.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedToolWindow;
		base.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
		base.Name = "OptionsForm";
		base.ShowIcon = false;
		base.StartPosition = System.Windows.Forms.FormStartPosition.CenterParent;
		this.Text = "Advanced Options";
		this.groupBox1.ResumeLayout(false);
		this.groupBox1.PerformLayout();
		base.ResumeLayout(false);
	}
}
