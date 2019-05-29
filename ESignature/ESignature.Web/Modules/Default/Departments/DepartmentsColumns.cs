
namespace ESignature.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.Departments")]
    [BasedOnRow(typeof(Entities.DepartmentsRow), CheckNames = true)]
    public class DepartmentsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [Visible(false)]
        public Int32 DepartmentId { get; set; }
        [EditLink]
        [Width(200)]
        public String DepartmentName { get; set; }
        [Width(200)]
        public String DepartmentCode { get; set; }
        [DisplayName("Company Location")]
        [Width(200)]
        public Int32 CompanyLocationId { get; set; }
        [Width(200)]
        [DisplayName("Division Name")]
        public String DivisionDivisionName { get; set; }
        [Width(150)]
        [Visible(false)]
        public String Details { get; set; }
        [Width(150)]
        public DateTime CreatedDateTime { get; set; }
        [Visible(false)]
        public Boolean MarkDeleted { get; set; }
    }
}