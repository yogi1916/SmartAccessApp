
namespace ESignature.AccessEmployee.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("AccessEmployee.EmployeeFunctionCards")]
    [BasedOnRow(typeof(Entities.EmployeeFunctionCardsRow), CheckNames = true)]
    public class EmployeeFunctionCardsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 EmployeeFunctionCardId { get; set; }
        public String CardTypeCardTypeName { get; set; }
        public String EmployeeMasterEmployeeCode { get; set; }
        [EditLink]
        public String CardNo { get; set; }
        public String CsnNo { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public Boolean MarkDeleted { get; set; }
        public String FacilityCode { get; set; }
        public Int32 TempFuncId { get; set; }
    }
}