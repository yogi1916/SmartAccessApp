
namespace ESignature.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.Salutation")]
    [BasedOnRow(typeof(Entities.SalutationRow), CheckNames = true)]
    public class SalutationColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SalutationId { get; set; }
        [EditLink]
        public String SalutationName { get; set; }
    }
}