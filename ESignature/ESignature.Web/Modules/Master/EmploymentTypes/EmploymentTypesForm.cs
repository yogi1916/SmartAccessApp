
namespace ESignature.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.EmploymentTypes")]
    [BasedOnRow(typeof(Entities.EmploymentTypesRow), CheckNames = true)]
    public class EmploymentTypesForm
    {
        public String EmploymentType { get; set; }
    }
}