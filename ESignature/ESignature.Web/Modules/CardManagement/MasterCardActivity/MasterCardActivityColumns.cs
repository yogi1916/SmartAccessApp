
namespace ESignature.CardManagement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("CardManagement.MasterCardActivity")]
    [BasedOnRow(typeof(Entities.MasterCardActivityRow), CheckNames = true)]
    public class MasterCardActivityColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CardActivityiD { get; set; }
        [EditLink]
        public String Activity { get; set; }
    }
}