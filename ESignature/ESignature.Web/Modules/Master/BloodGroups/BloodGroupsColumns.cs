
namespace ESignature.Master.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Master.BloodGroups")]
    [BasedOnRow(typeof(Entities.BloodGroupsRow), CheckNames = true)]
    public class BloodGroupsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 BloodGroupId { get; set; }
        [EditLink]
        public String BloodGroup { get; set; }
    }
}