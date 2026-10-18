using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Windows.Forms;

namespace HitmanPatcher;

public class TrayOptionsForm : Form
{
	private IContainer components;

	private RichTextBox textBoxDomains;

	private Label label1;

	private CheckBox checkboxStart;

	private CheckBox checkBoxMinimize;

	private Button buttonSave;

	private Button buttonCancel;

	public bool startInTray
	{
		get
		{
			return checkboxStart.Checked;
		}
		private set
		{
			checkboxStart.Checked = value;
		}
	}

	public bool minimizeToTray
	{
		get
		{
			return checkBoxMinimize.Checked;
		}
		private set
		{
			checkBoxMinimize.Checked = value;
		}
	}

	public List<string> trayDomains
	{
		get
		{
			return new List<string>(textBoxDomains.Lines);
		}
		private set
		{
			textBoxDomains.Lines = value.ToArray();
		}
	}

	public TrayOptionsForm(bool startInTray, bool minimizeToTray, List<string> trayDomains, bool darkMode)
	{
		InitializeComponent();
		this.startInTray = startInTray;
		this.minimizeToTray = minimizeToTray;
		this.trayDomains = trayDomains;
		toggleTheme(darkMode);
	}

	private void toggleTheme(bool darkModeEnabled)
	{
		FlatStyle flatStyle = ((!darkModeEnabled) ? FlatStyle.Standard : FlatStyle.Flat);
		Color foreColor = (darkModeEnabled ? Color.White : SystemColors.ControlText);
		BackColor = (darkModeEnabled ? Color.FromArgb(24, 26, 27) : SystemColors.Control);
		textBoxDomains.BackColor = (darkModeEnabled ? Color.FromArgb(24, 26, 27) : SystemColors.Control);
		textBoxDomains.ForeColor = foreColor;
		label1.ForeColor = foreColor;
		buttonSave.FlatStyle = flatStyle;
		buttonSave.BackColor = (darkModeEnabled ? Color.FromArgb(19, 21, 22) : SystemColors.Control);
		buttonSave.ForeColor = foreColor;
		checkboxStart.ForeColor = foreColor;
		checkBoxMinimize.ForeColor = foreColor;
		buttonCancel.FlatStyle = flatStyle;
		buttonCancel.BackColor = (darkModeEnabled ? Color.FromArgb(19, 21, 22) : SystemColors.Control);
		buttonCancel.ForeColor = foreColor;
	}

	private void buttonCancel_Click(object sender, EventArgs e)
	{
		DialogResult = DialogResult.Cancel;
		Close();
	}

	private void buttonSave_Click(object sender, EventArgs e)
	{
		DialogResult = DialogResult.OK;
		Close();
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
		this.textBoxDomains = new System.Windows.Forms.RichTextBox();
		this.label1 = new System.Windows.Forms.Label();
		this.checkboxStart = new System.Windows.Forms.CheckBox();
		this.checkBoxMinimize = new System.Windows.Forms.CheckBox();
		this.buttonSave = new System.Windows.Forms.Button();
		this.buttonCancel = new System.Windows.Forms.Button();
		base.SuspendLayout();
		this.textBoxDomains.Anchor = System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Left | System.Windows.Forms.AnchorStyles.Right;
		this.textBoxDomains.Location = new System.Drawing.Point(13, 36);
		this.textBoxDomains.Margin = new System.Windows.Forms.Padding(4);
		this.textBoxDomains.Name = "textBoxDomains";
		this.textBoxDomains.Size = new System.Drawing.Size(184, 115);
		this.textBoxDomains.TabIndex = 0;
		this.textBoxDomains.Text = "";
		this.label1.AutoSize = true;
		this.label1.Location = new System.Drawing.Point(13, 9);
		this.label1.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
		this.label1.Name = "label1";
		this.label1.Size = new System.Drawing.Size(142, 16);
		this.label1.TabIndex = 1;
		this.label1.Text = "Domains (one per line)";
		this.checkboxStart.Anchor = System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right;
		this.checkboxStart.AutoSize = true;
		this.checkboxStart.Location = new System.Drawing.Point(218, 38);
		this.checkboxStart.Margin = new System.Windows.Forms.Padding(4);
		this.checkboxStart.Name = "checkboxStart";
		this.checkboxStart.Size = new System.Drawing.Size(94, 20);
		this.checkboxStart.TabIndex = 2;
		this.checkboxStart.Text = "Start in tray";
		this.checkboxStart.UseVisualStyleBackColor = true;
		this.checkBoxMinimize.Anchor = System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right;
		this.checkBoxMinimize.AutoSize = true;
		this.checkBoxMinimize.Location = new System.Drawing.Point(218, 66);
		this.checkBoxMinimize.Margin = new System.Windows.Forms.Padding(4);
		this.checkBoxMinimize.Name = "checkBoxMinimize";
		this.checkBoxMinimize.Size = new System.Drawing.Size(120, 20);
		this.checkBoxMinimize.TabIndex = 3;
		this.checkBoxMinimize.Text = "Minimize to tray";
		this.checkBoxMinimize.UseVisualStyleBackColor = true;
		this.buttonSave.Anchor = System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right;
		this.buttonSave.Location = new System.Drawing.Point(209, 123);
		this.buttonSave.Margin = new System.Windows.Forms.Padding(4);
		this.buttonSave.Name = "buttonSave";
		this.buttonSave.Size = new System.Drawing.Size(75, 28);
		this.buttonSave.TabIndex = 4;
		this.buttonSave.Text = "Save";
		this.buttonSave.UseVisualStyleBackColor = true;
		this.buttonSave.Click += new System.EventHandler(this.buttonSave_Click);
		this.buttonCancel.Anchor = System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right;
		this.buttonCancel.Location = new System.Drawing.Point(294, 123);
		this.buttonCancel.Margin = new System.Windows.Forms.Padding(4);
		this.buttonCancel.Name = "buttonCancel";
		this.buttonCancel.Size = new System.Drawing.Size(75, 28);
		this.buttonCancel.TabIndex = 5;
		this.buttonCancel.Text = "Cancel";
		this.buttonCancel.UseVisualStyleBackColor = true;
		this.buttonCancel.Click += new System.EventHandler(this.buttonCancel_Click);
		base.AutoScaleDimensions = new System.Drawing.SizeF(8f, 16f);
		base.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
		base.ClientSize = new System.Drawing.Size(382, 164);
		base.Controls.Add(this.buttonCancel);
		base.Controls.Add(this.buttonSave);
		base.Controls.Add(this.checkBoxMinimize);
		base.Controls.Add(this.checkboxStart);
		base.Controls.Add(this.label1);
		base.Controls.Add(this.textBoxDomains);
		base.FormBorderStyle = System.Windows.Forms.FormBorderStyle.SizableToolWindow;
		base.Margin = new System.Windows.Forms.Padding(4);
		this.MinimumSize = new System.Drawing.Size(400, 211);
		base.Name = "TrayOptionsForm";
		this.Text = "Tray Options";
		base.ResumeLayout(false);
		base.PerformLayout();
	}
}
