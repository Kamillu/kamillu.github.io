emailForm = function() { 
        var remite = prompt("Introduzca correo de contacto: "); 
         
        var remite = document.getElementById("remite").value;
		if (remite != '' && remite != null && nombre != '' && nombre != null && telefono != '' && telefono != null) { 
itemsString = ""; 
esubtotal = 0;
egastos = 0;
etotal = 0; 
for( var current in this.items ){ 
var item = this.items[current]; 
esubtotal = item.quantity * item.price; 
itemsString += item.name;
if (item.size) itemsString += " " + item.size + "\n";
itemsString += item.quantity + " x " + item.price + " = " + String(esubtotal) + " " + me.currency + "\n"; 
etotal += esubtotal; 
}; 
itemsString += "\nSubtotal = " + etotal + " " + me.currency +"\n";
var gastos = me.shippingCost;
if (formapago == "Contra-reembolso") {
gastos += 8;
etotal += 8;
}
if (gastos){
itemsString += "Gastos de envio = " + gastos + " " + me.currency +"\n";
etotal += me.shippingCost; 
} else {itemsString += "Gastos de envio = GRATIS\n";}
itemsString +="\nTOTAL: " + String(etotal) + me.currency + "\n\n" + "Remitente: " + remite;
itemsString +="\n\nNOMBRE: " + nombre + "\nTelefono: " + telefono;
itemsString +="\nDIRECCION: " + direccion;
itemsString +="\nCIUDAD/PAIS: " + codigo + " " + ciudad + " - " + provincia + " (" + pais + ")"; 
itemsString +="\n\nOBSERVACIONES: " + observaciones; 
itemsString +="\n\nFORMA DE PAGO: " + formapago; 
			
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
