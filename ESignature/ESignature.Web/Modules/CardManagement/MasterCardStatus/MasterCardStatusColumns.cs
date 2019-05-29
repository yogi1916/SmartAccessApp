
namespace ESignature.CardManagement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("CardManagement.MasterCardStatus")]
    [BasedOnRow(typeof(Entities.MasterCardStatusRow), CheckNames = true)]
    public class MasterCardStatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CardStatusId { get; set; }
        [EditLink]
        public String CardStatus { get; set; }
    }
}