
namespace ESignature.CardManagement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("CardManagement.MasterCardUseType")]
    [BasedOnRow(typeof(Entities.MasterCardUseTypeRow), CheckNames = true)]
    public class MasterCardUseTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CardUseTypeId { get; set; }
        [EditLink]
        public String CardUseTypeName { get; set; }
    }
}