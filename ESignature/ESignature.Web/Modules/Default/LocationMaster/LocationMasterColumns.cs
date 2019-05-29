
namespace ESignature.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.LocationMaster")]
    [BasedOnRow(typeof(Entities.LocationMasterRow), CheckNames = true)]
    public class LocationMasterColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [Visible(false)]
        public Int32 LocationMasterId { get; set; }
        [DisplayName("Group Name")]
        [Visible(false)]
        [Width(150)]
        public String CompanyGroupGroupName { get; set; }
        [EditLink]
        [Width(150)]
        public String LocationName { get; set; }
        [Width(150)]
        public String LocationCode { get; set; }
        [Width(200)]
        public DateTime CreatedDateTime { get; set; }
        [Visible(false)]
        public Boolean MarkDeleted { get; set; }        
    }
}