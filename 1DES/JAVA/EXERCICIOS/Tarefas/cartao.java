package modelo;

import java.util.Scanner;
public class acumulaçao {
	
	public static Scanner scan; 
	public static void main(String[] args) {
//		double r = scan.nextDouble();
//		double  v = scan.nextDouble();
		
		emprestimo();
		
	}
	public static double emprestimo () {
	scan = new Scanner(System.in);
	
	System.out.println("Digite o valor do seu salário: ");
	 double r = scan.nextDouble();
	System.out.println("Digite o valor na qual você deseja emprestar: ");
	 double v = scan.nextDouble();
	System.out.println("Digite o valor que lhe sobra após pagar todas as suas contas: ");
	double contas = scan.nextDouble();
	System.out.println("Digite a quantidade de parcelas que você deseja fazer: ");
	int qtd = scan.nextInt();
	double valor_30desconto,  montante, taxa, juros, t;
	

	
	valor_30desconto = r * 0.30 ;
	
	t = v/(r *0.30);
	taxa = 1 + (0.8/100);
	montante = v * Math.pow(taxa, t);
	
	double parcelas = (montante*taxa) / qtd;
	
	
	
	if (contas < valor_30desconto ) {
		System.out.println("Desculpe, mas não é possivel realizar o emprestimo devido ao seu baixo valor de dinheiro disponivel.");
		montante = 0;
	} else {
	
		
		 
		
		for(int i = 0; i < t; i++) {
			juros = montante*(0.85/100);
			montante +=juros;
			
				
				

			

			
				}
		
}
	System.out.printf("O valor do emprestimo total, acrescentando juros é de: R$ %.2f\n", montante, "reais");
 
	System.out.printf("Cada parcela custando aproximamente:R$ %.2f\n" , parcelas , "reais");

	return montante;
	
	}
}
