
namespace ESignature.Admin.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Admin.CompanyGroup")]
    [BasedOnRow(typeof(Entities.CompanyGroupRow), CheckNames = true)]
    public class CompanyGroupForm
    {
        public String GroupName { get; set; }
        [ReadOnly(true)]
        [DefaultValue("now")]
        [DateTimeEditor]
        [DisplayFormat("dd-MM-yyyy HH:mm:ss")]
        public DateTime CreatedDeteTime { get; set; }
        [Visible(false)]
        public Boolean MarkDeleted { get; set; }
    }
}