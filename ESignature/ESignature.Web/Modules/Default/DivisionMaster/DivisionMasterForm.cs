
namespace ESignature.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using ESignature.Admin.Entities;

    [FormScript("Default.DivisionMaster")]
    [BasedOnRow(typeof(Entities.DivisionMasterRow), CheckNames = true)]
    public class DivisionMasterForm
    {
        public String DivisionName { get; set; }
        public String DivisionCode { get; set; }
        [LookupEditor(typeof(CompanyMasterRow))]
        [DisplayName("Company")]
        public Int32 CompanyMasterId { get; set; }
        [HtmlNoteContentEditor]
        public String Details { get; set; }
        [DefaultValue("now")]
        [DateTimeEditor]
        [ReadOnly(true)]
        [DisplayFormat("dd-MM-yyyy HH:mm:ss")]
        public DateTime CreatedDateTime { get; set; }
        [Visible(false)]
        public Boolean MarkDeleted { get; set; }
    }
}