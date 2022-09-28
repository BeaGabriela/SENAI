package visao;

import modelo.excel;

public class teste {

	public static void main(String[] args) {
		excel coisaFofa = new excel();
		double vals [] = {10, 45,18,3.5,78,95,15.35};
		
		System.out.println(coisaFofa.soma(vals));
		System.out.println(coisaFofa.media(vals));
		System.out.println(coisaFofa.maximo(vals));
		System.out.println(coisaFofa.minimo(vals));
		System.out.println(coisaFofa.hoje());
		System.out.println(coisaFofa.hojeSimples());
		System.out.println(coisaFofa.agora());
		System.out.println(coisaFofa.agoraAMPm());
		
				
	}

}
