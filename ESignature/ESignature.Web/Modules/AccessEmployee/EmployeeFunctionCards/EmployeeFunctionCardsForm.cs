
namespace ESignature.AccessEmployee.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("AccessEmployee.EmployeeFunctionCards")]
    [BasedOnRow(typeof(Entities.EmployeeFunctionCardsRow), CheckNames = true)]
    public class EmployeeFunctionCardsForm
    {
        public Int32 CardType { get; set; }
        public Int32 EmployeeMasterId { get; set; }
        public String CardNo { get; set; }
        public String CsnNo { get; set; }
        public DateTime CreatedDateTime { get; set; }
        public Boolean MarkDeleted { get; set; }
        public String FacilityCode { get; set; }
        public Int32 TempFuncId { get; set; }
    }
}