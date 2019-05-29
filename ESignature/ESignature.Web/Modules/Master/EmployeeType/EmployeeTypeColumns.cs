
namespace ESignature.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.EmployeeType")]
    [BasedOnRow(typeof(Entities.EmployeeTypeRow), CheckNames = true)]
    public class EmployeeTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EmployeeTypeId { get; set; }
        [EditLink]
        public String EmployeeTypeName { get; set; }
    }
}