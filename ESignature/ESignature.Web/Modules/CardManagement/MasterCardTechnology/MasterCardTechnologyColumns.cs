
namespace ESignature.CardManagement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("CardManagement.MasterCardTechnology")]
    [BasedOnRow(typeof(Entities.MasterCardTechnologyRow), CheckNames = true)]
    public class MasterCardTechnologyColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CardTechId { get; set; }
        [EditLink]
        public String CardTechName { get; set; }
    }
}