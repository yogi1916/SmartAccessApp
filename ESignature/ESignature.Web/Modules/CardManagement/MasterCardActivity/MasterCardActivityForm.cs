
namespace ESignature.CardManagement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("CardManagement.MasterCardActivity")]
    [BasedOnRow(typeof(Entities.MasterCardActivityRow), CheckNames = true)]
    public class MasterCardActivityForm
    {
        public String Activity { get; set; }
    }
}