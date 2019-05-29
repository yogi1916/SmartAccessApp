
namespace ESignature.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.MaretialStatus")]
    [BasedOnRow(typeof(Entities.MaretialStatusRow), CheckNames = true)]
    public class MaretialStatusColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MaretialStatusId { get; set; }
        [EditLink]
        public String MaretialStatusName { get; set; }
    }
}