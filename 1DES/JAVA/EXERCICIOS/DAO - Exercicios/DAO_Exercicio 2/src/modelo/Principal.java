package modelo;

public class Principal {

		private String nome;
		private double n1;
		private double n2;
		private double n3;
		
		public Principal (String entrada) {
			nome = entrada.split(";")[0];
			n1 = Double.parseDouble(entrada.split(";")[1]);
			n2 = Double.parseDouble(entrada.split(";")[2]);
			n3 = Double.parseDouble(entrada.split(";")[3]);
	}
		public String soma() {
			double media = (n1+n2+n3)/3;
			return nome + "\t" + String.format("%.2f", media);
			
		}
	
}
