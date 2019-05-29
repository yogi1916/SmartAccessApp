
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
    using SmartCommandControl.Northwind.Lookups;

    [FormScript("Default.Designations")]
    [BasedOnRow(typeof(Entities.DesignationsRow), CheckNames = true)]
    public class DesignationsForm
    {
        public String DesignationName { get; set; }
        public String DesignationCode { get; set; }        
        //[DisplayName("Company")]
        [DisplayName("Company"),  LookupEditor(typeof(CompanyDesignationLookup), AutoComplete = true,InplaceAdd =true)]
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