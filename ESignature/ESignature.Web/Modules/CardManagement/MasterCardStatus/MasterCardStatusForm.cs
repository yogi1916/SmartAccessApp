
namespace ESignature.CardManagement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("CardManagement.MasterCardStatus")]
    [BasedOnRow(typeof(Entities.MasterCardStatusRow), CheckNames = true)]
    public class MasterCardStatusForm
    {
        public String CardStatus { get; set; }
    }
}