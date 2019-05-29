
namespace ESignature.Master.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Master.MaretialStatus")]
    [BasedOnRow(typeof(Entities.MaretialStatusRow), CheckNames = true)]
    public class MaretialStatusForm
    {
        public String MaretialStatusName { get; set; }
    }
}