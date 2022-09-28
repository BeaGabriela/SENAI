package modelo;

import java.io.IOException;
import java.util.Random;
import java.util.Scanner;

public class ALEATORIO {
	
	public static Scanner  scan;
	

	public static void main(String[] args) throws IOException  {
	 scan = new Scanner(System.in);
	 int menu = 0;
	 
	  while (menu!=4) {
		  System.out.print("1- Números Inteiros\n2- Números reais\n3- Nomes\n4- Sair");
		  menu = scan.nextInt();
		  
		  switch(menu) {
		  case 1:
			  GerarInteiro();
			  	break;
		  case 2:
			  GerarReal();
			  	break;
		  case 3:
			  GerarNome();
			  break;
		  case 4: 
			  System.out.println("Obrigado!");
			   break;
			default :
				System.out.println("Opção Inválida");
				break;
				
		  }
				  			
	   }

	}
	public static void GerarInteiro() {
		scan = new Scanner (System.in);
		Random rand = new Random();
		
		System.out.println("Digite quantos números deseja gerar: ");
		int qntd = scan.nextInt();
		
		int[] numeros = new int[qntd];
		
		for (int i = 0; i < qntd; i++) {
			numeros[i] = rand.nextInt(100);
			System.out.print(numeros[i]);
			
		}
	}
			
			public static void GerarReal() {
				scan = new Scanner (System.in);
				Random rand = new Random();
				
				System.out.println("Digite quantos números deseja gerar: ");
				int qntd = scan.nextInt();
				
				double[] numeros = new double[qntd];
				
				for (int i = 0; i < qntd; i++) {
					numeros[i] = rand.nextDouble() * (100);
					System.out.printf("%.2f\n",numeros[i]);
					
		}
		
	}
			
			public static void GerarNome() {
				scan =  new  Scanner (System.in);
			 Random rand = new Random();	
			 
				System.out.println("Quantos nomes você deseja gerar?");
				int qntd = scan.nextInt();
				
				String[] nomes = {"João" ,"Maria", "José","Ana", "Pedro"};
				
						for (int i=0; i < qntd; i++) {
						int a = rand.nextInt(nomes.length);
						System.out.println(nomes[a]); 
						}
						
						
				
			}
}
