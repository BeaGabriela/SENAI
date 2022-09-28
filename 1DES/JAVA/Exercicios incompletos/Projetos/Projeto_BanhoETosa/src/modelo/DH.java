package modelo;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DH {
	
	public Date data;
	public Date hora;
	
	// Atributos para formatar a data
	private SimpleDateFormat df = new SimpleDateFormat("dd/MM/yyyy");
	private SimpleDateFormat hf = new SimpleDateFormat("hh:mm");

	public DH() {
		
	}


	public DH(String data, String hora) throws ParseException{
		this.data = df.parse(data);
		this.hora = hf.parse(hora);
	
	}
	public String tabularString() {
		return df.format(data)+ "\t" + hf.format(hora);

}
}
