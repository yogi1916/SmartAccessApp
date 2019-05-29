namespace ESignature.Administration.Forms
{
    using ESignature.Admin.Entities;
    using ESignature.Default.Entities;
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("Administration.User")]
    [BasedOnRow(typeof(Entities.UserRow), CheckNames = true)]
    public class UserForm
    {
        public String Username { get; set; }
        public String DisplayName { get; set; }
        [LookupEditor(typeof(CompanyMasterRow))]
        [DisplayName("Company")]
        [Visible(false)]
        public Int32 CompnayMasterID { get; set; }

        [LookupEditor(typeof(LocationMasterRow), Multiple = true, Delimited = true, OpenDialogAsPanel = true)]
        [Visible(false)]
        public String Locations { get; set; }
        [EmailEditor]
        public String Email { get; set; }
        public String UserImage { get; set; }
        [PasswordEditor, Required(true)]
        public String Password { get; set; }
        [PasswordEditor, OneWay, Required(true)]
        public String PasswordConfirm { get; set; }
        [OneWay]
        public string Source { get; set; }
        
    }
}