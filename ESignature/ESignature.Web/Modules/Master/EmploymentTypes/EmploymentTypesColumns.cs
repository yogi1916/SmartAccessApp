
namespace ESignature.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.EmploymentTypes")]
    [BasedOnRow(typeof(Entities.EmploymentTypesRow), CheckNames = true)]
    public class EmploymentTypesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EmploymentTypeId { get; set; }
        [EditLink]
        public String EmploymentType { get; set; }
    }
}