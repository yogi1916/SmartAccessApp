
namespace ESignature.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.Gender")]
    [BasedOnRow(typeof(Entities.GenderRow), CheckNames = true)]
    public class GenderColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 GenderId { get; set; }
        [EditLink]
        public String GenderName { get; set; }
    }
}