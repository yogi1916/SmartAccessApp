
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

    [FormScript("Default.SubDepartments")]
    [BasedOnRow(typeof(Entities.SubDepartmentsRow), CheckNames = true)]
    public class SubDepartmentsForm
    {
        public String SubDepartmentName { get; set; }
        public String SubDepartmentCode { get; set; }
        [LookupEditor(typeof(EmployeeDepartmentLookup))]
        [DisplayName("Department")]
        public Int32 DepartmentId { get; set; }
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