package modelo;

import java.util.Date;
import java.text.SimpleDateFormat;

public class excel {

	SimpleDateFormat dfABNT = new SimpleDateFormat("dd/MM/yyyy");
	SimpleDateFormat dfSimples = new SimpleDateFormat("dd/MM");
	SimpleDateFormat hfABNT = new SimpleDateFormat("HH:mm");
	SimpleDateFormat hfAMPM = new SimpleDateFormat("HH:mm:aa");

	public double soma(double valores[]) {
		double total = 0;
		for (int i = 0; i < valores.length; i++) {
			total += valores[i];
		}
		return total;

	}

	public String hoje() {
		Date data = new Date();
		return dfABNT.format(data);
	}

	public String hojeSimples() {
		Date data = new Date();
		return dfSimples.format(data);
	}

	public String agora() {
		Date data = new Date();
		return hfABNT.format(data);
	}

	public String agoraAMPm() {
		Date data = new Date();
		return hfAMPM.format(data);

	}

	public double media(double valores[]) {
		double total = 0;
		for (int i = 0; i < valores.length; i++) {
			total += valores[i];
		}
		return total / valores.length;

	}

	public double maximo(double valores[]) {
		double max = 0;
		for (int i = 0; i < valores.length; i++) {
			if (max <= valores[i]) {
				max = valores[i];
			}
		}
		return max;

	}
	public double minimo(double valores[]) {
		double min = soma(valores);
		for (int i = 0; i < valores.length; i++) {
			if (min >= valores[i]) {
				min = valores[i];
			}
		}
		return min;
}
}
