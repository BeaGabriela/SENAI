package modelo;

public class Principal {


		private String nome;
		private int ano;
		
		public Principal (String entrada) {
			nome = (entrada.split(";")[0]);
			ano = Integer.parseInt(entrada.split(";")[1]);
	}
		public int soma() {
			return 2022 - ano;
		}
	
}
