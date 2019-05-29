
namespace ESignature.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.Salutation")]
    [BasedOnRow(typeof(Entities.SalutationRow), CheckNames = true)]
    public class SalutationForm
    {
        public String SalutationName { get; set; }
    }
}