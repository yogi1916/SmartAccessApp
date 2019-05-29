
namespace ESignature.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.SubDepartments")]
    [BasedOnRow(typeof(Entities.SubDepartmentsRow), CheckNames = true)]
    public class SubDepartmentsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [Visible(false)]
        public Int32 SubDepartmentId { get; set; }
        [EditLink]
        public String SubDepartmentName { get; set; }
        public String SubDepartmentCode { get; set; }
        [DisplayName("Department Name")]
        public String DepartmentDepartmentName { get; set; }
        public String Details { get; set; }
        public DateTime CreatedDateTime { get; set; }
        [Visible(false)]
        public Boolean MarkDeleted { get; set; }
    }
}