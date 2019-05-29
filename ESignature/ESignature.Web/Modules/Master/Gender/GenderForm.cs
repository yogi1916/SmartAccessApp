
namespace ESignature.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Gender")]
    [BasedOnRow(typeof(Entities.GenderRow), CheckNames = true)]
    public class GenderForm
    {
        public String GenderName { get; set; }
    }
}