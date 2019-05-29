
namespace ESignature.Default.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Default.CompanyLocations")]
    [BasedOnRow(typeof(Entities.CompanyLocationsRow), CheckNames = true)]
    public class CompanyLocationsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [Visible(false)]
        public Int32 CompanyLocationId { get; set; }
        [Width(150)]
        [DisplayName("Company Name")]
        public String CompanyMasterCompanyName { get; set; }
        [Width(150)]
        [DisplayName("Location Name")]
        [EditLink]
        public String LocationMasterLocationName { get; set; }
        [Width(200)]
        public DateTime CreatedDateTime { get; set; }
        [Visible(false)]
        public Boolean MarkDeleted { get; set; }
    }
}