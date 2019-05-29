
namespace ESignature.CardManagement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("CardManagement.MasterCardUseType")]
    [BasedOnRow(typeof(Entities.MasterCardUseTypeRow), CheckNames = true)]
    public class MasterCardUseTypeForm
    {
        public String CardUseTypeName { get; set; }
    }
}