
namespace ESignature.CardManagement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("CardManagement.MasterCardType")]
    [BasedOnRow(typeof(Entities.MasterCardTypeRow), CheckNames = true)]
    public class MasterCardTypeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CardTypeId { get; set; }
        [EditLink]
        public String CardTypeName { get; set; }
    }
}