
namespace ESignature.Default.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using ESignature.Default.Entities;
    using SmartCommandControl.Northwind.Lookups;

    [FormScript("Default.Departments")]
    [BasedOnRow(typeof(Entities.DepartmentsRow), CheckNames = true)]
    public class DepartmentsForm
    {
        public String DepartmentName { get; set; }
        public String DepartmentCode { get; set; }
        //[LookupEditor(typeof(CompanyDepartmentLookup),AutoComplete =true)]
        [LookupEditor(typeof(CompanyDepartmentLookup))]
        [DisplayName("Location")]
        public Int32 CompanyLocationId { get; set; }
        [Visible(false)]
        public Int32 DivisionId { get; set; }
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