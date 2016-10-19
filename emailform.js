emailForm = function() { 
        var remite = prompt("Introduzca correo de contacto: "); 
         
        if (remite != '' && remite != null) {         

            itemsString = ""; 
            esubtotal = 0;
			egastos = 0;
            etotal = 0; 
            for( var current in this.items ){ 
            var item = this.items[current]; 
            esubtotal = item.quantity * item.price; 
            itemsString += item.name;
			if (item.size) itemsString += "Talla " + item.size + "\n";
			if (item.color) itemsString += "Color " + item.color + "\n";
			itemsString += item.quantity + " x " + item.price + " = " + String(esubtotal) + me.currency + "\n"; 		
            etotal += esubtotal; 
            }; 
			if (me.shippingCost){
			itemsString += "\nSubtotal = " + etotal + "\n";
			itemsString += "Gastos de envio = " + me.shippingCost + "\n";
			etotal += me.shippingCost; 
			};
            itemsString +="\nTotal: " + String(etotal) + me.currency + "\n" + "Remitente: " + remite; 
            var form = document.createElement("form"); 
               form.style.display = "none"; 
               form.method = "POST"; 
               form.action = "http://kamillustore.16mb.com/emailform.php"; 
               form.acceptCharset = "utf-8"; 
               form.appendChild(this.createHiddenElement("jcitems", itemsString)); 
               form.appendChild(this.createHiddenElement("jcremite", remite)); 
 
            document.body.appendChild(form); 
			me.empty();
            form.submit(); 
            document.body.removeChild(form); 
            if (p == null || p==''); 
             
        }
		return;	
    }; 
