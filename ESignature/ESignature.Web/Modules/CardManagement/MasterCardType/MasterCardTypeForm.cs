﻿
namespace ESignature.CardManagement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("CardManagement.MasterCardType")]
    [BasedOnRow(typeof(Entities.MasterCardTypeRow), CheckNames = true)]
    public class MasterCardTypeForm
    {
        public String CardTypeName { get; set; }
    }
}