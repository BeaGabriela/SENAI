package modelo;

import java.util.Random;
import java.util.Scanner;

public class tentativa2 {
	public static Scanner scan;
	public static void main(String[] args) {
		scan = new Scanner(System.in);
		 int menu = 0;
		 Random rand  = new Random();
		  while (menu!=4) {
			  System.out.print("1- Um vetor\n2-Dois vetores\n3- Inteiro\n4-Fatorial\n5-Vetor3\n6-Ordem\n7-igual");
			  menu = scan.nextInt();
			  switch(menu) {
			  
			  case 1:
				  Vetor();
				  	break;
				  	
			  case 2:
				  doisvetores();
				  break;
				  
			  case 3:
				  InteiroPositivos();
				  break;
				  
			  case 4: 
				  Buscas();
				   break;
			  case 5:
				  Vetores3();
				  	break;
				  	
				  case 6:
					  ordem();
					  break;
				  case 7:
					  igual();
					  break;
				default :
					System.out.println("Opção Inválida");
					break;
			  }
		   }
	}
		  
		  //1 - Faça um programa que lê 10 números inteiros do teclado e armazene em um vetor. 
		  //Ao final imprima o vetor armazenado nos dois sentidos.
		  public static void Vetor() {
			 int []v= new int [10];
				
				System.out.println("Digite 10 valores: ");
				//Inserir os valores
				for(int i= 0; i<v.length;i++) {
					v[i]= scan.nextInt();
					
				}//Mostrar os valores
				for(int i= 0; i<v.length;i++) {
					System.out.println("v["+i+"]: "+v[i]);
				}//Mostrar os valores "ao contrario".
				
				for(int i= 0; i<v.length;i++) {
					System.out.println("v["+i+"]:"+v[9-i]);
				}
				
				 }
		  //2 - Ler um vetor de 10 elementos. Crie um segundo vetor, com todos os elementos na ordem inversa
		  //, ou seja, o último elemento passará a ser o primeiro, o penúltimo será o segundo e assim por diante. 
		  //Imprima os dois vetores.

		  public static void doisvetores() {
			  int []v = new int[10];
			  int []v2 = new int [10];
			  
				System.out.println("Digite 10 valores: ");
			  	for(int i = 0; i<v.length;i++) {
			  		v[i]= scan.nextInt();
			  	}
			  	
			  	for(int i = 0; i<v.length;i++) {
			  		System.out.println("v["+i+"]: "+v[i]);
			  		
			  	}	
			  	System.out.println();
			  	for(int i =0; i<v2.length;i++) {
			  		System.out.println("v["+i+"]: "+ (v2[i]=v[9-i]));
			  	}
			  	System.out.println();
		  }
				
	
			
			 
		  
		  
		  //3 - Ler um vetor de 10 elementos inteiros e positivos. Criar um segundo vetor da seguinte forma:
		//os elementos de índice par receberão os respectivos elementos divididos por 2; 
		//os elementos de índice ímpar receberão os respectivos elementos multiplicados por 3. Imprima os dois vetores.

	public static void InteiroPositivos() {
		int []v = new int [10];
		int [] x = new int [10];
		
		
			System.out.println("Digite 10  valores inteiros positivos: ");
			
			for(int i = 0; i < v.length;i++) {
				v[i]= scan.nextInt();
				
			}
			
			//Primeiro vetor
			System.out.println("Primeiro vetor");
				for (int i = 0; i <v.length;i++) {	
					System.out.print(v[i] + "\t");
					
				}
				
				//dividir os vetores pares
				System.out.println();
				for(int i = 0; i<v.length; i++) {
					if(i%2 == 0) {
					x[i] = v[i]/2;
					
				//multiplica os valores impares
					}else {
						x[i] = v[i] *3;
					}
				}
				System.out.println("");
				System.out.println("\nSegundo vetor");
				for(int i =0; i<x.length;i++) {
					System.out.print(x[i] + "\t");
				}
		}
	
	

		  //4-Leia um vetor com 10 nomes de pessoas, após pedir que o usuário digite um nome qualquer de pessoa.
	// Escreva "ACHEI", se o nome armazenado no vetor C ou "NÃO ACHEI" caso contrário.

	public static void Buscas() {
	int c=0;
	String [] v = new String [10];
	System.out.println("Digite 10 nomes: ");
	
	for(int i = 0; i<v.length;i++) {
		v[i] = scan.next();	
				
	}
	
		System.out.println("Digite o nome que deseja buscar: ");
		String n = scan.next();
		
		for (int i =0; i < v.length; i++) {
			if(v[i].equals(n)) {
				System.out.println("Achei");
					c++;
			
			}
		}
		
		if (c!=0) {
			System.out.println("Quantidade de vezes que o nome aparece: " +c);	
		
		}else {
			System.out.println("Não achei");
		}
}

//5 5 -Faça um programa que leia e monte dois vetores de números inteiros com 20 números cada. x
	//Depois de montados gere um terceiro vetor formado pela diferença dos dois vetores lidos, um quarto vetor formado pela soma dos dois vetores lidos 
	//e por último um quinto vetor formado pela multiplicação dos dois vetores lidos.
	
	public static void Vetores3() {
		 Random rand  = new Random();
		int [] v1 = new int [20];
		int [] v2 = new int [20];
		int [] v3 = new int [20];
		int [] v4 = new int [20];
		int [] v5 = new int [20];
			
		//le vetoe
		System.out.println();
		System.out.println("Vetor 1: ");
		for(int i = 0; i < v1.length;i++) {
			v1[i] = rand.nextInt(20);
			System.out.print(v1[i] + "\t");
		}	
		System.out.println();
		System.out.println("Vetor 2: ");
		for(int i = 0; i < v2.length;i++) {
			v2[i] = rand.nextInt(20);
			System.out.print(v2[i] + "\t");
		}
		
		for(int i = 0; i<v2.length; i++) {
			v3[i] = v2[i] - v1[i];
			v4[i] = v2[i]+ v1[i]; 
			v5[i]= v2[i] * v1[i];
			
		}		
		System.out.println("\nSubtração dos vetores: ");
		for(int i =0; i<v2.length;i++) {
			System.out.print( v3[i] + "\t");
		}
		
		System.out.println("\nSoma dos vetores: " );
		for(int i =0; i<v2.length;i++) {
			System.out.print( v4[i] + "\t");
		}
		
		System.out.println("\nMultiplicação entre vetores: ");
		for(int i =0; i<v2.length;i++) {
			System.out.print( v5[i] + "\t");
		}
		
		System.out.println();
		}
	

//6 Utilizando vetores, crie um programa que organize uma quantidade qualquer de números inteiros fornecidos pelo usuário da seguinte forma:
//primeiro os números pares em ordem crescente e depois os números ímpares em ordem decrescente.
	public static void ordem() {
		System.out.println("Digite a quantidade de números que você deseja digitar: ");
		int n = scan.nextInt();
		int a = 0 ;
		int b= 0;
		int []v = new int [n];
			for(int i = 0; i<n; i++) {
				System.out.println("Digite um número: ");
				v[i] = scan.nextInt();
				if(v[i]%2==0) {
				a++;
					
				}else {
				b++;
				}
			}
		
		int [] v1 = new int [a];
		int [] v2 = new int [b];
		int p=0, j=0;
		
		for(int i = 0; i<v.length; i++) {
			if(v[i]%2==0) {
				v1[p] = v[i];
				p++;
				
			}else {
				v2[j] = v[i];
				j++;
			}
		}
		
		int valor;
		
		for(int i=0; i<v1.length;i++) {
			for(int k=0; k<v1.length;k++) {
				if(v1[i] < v1[k]) {
					valor = v1[i];
					v1[i] = v1[k];
					v1[k] = valor;
					
				}
			}
		}
		
		
		for(int i=0; i<v2.length; i++) {	
			for(int l=0; l<v2.length; l++) {
				if(v2[i]> v2[l]) {
					valor = v2[i];
					v2[i] = v2[l];
					v2[l] = valor;
					
				}
	
			}
		}
		
	 System.out.println("Números pares: ");
	 for(int i=0; i<v1.length; i++) {
		 System.out.print(v1[i] + "\t");
	 }
	 
	 System.out.println();
	 System.out.println("Números impares: ");
	 for(int i = 0; i<v2.length; i++) {
		 System.out.print(v2[i]+ "\t");
	}
	System.out.println("\n");
  }

	
//7 Dados dois vetores de tamanho N, faça uma função que diga se os mesmos possuam conteúdo igual.
public static void igual() {
	Random rand  = new Random();
	System.out.println("Digite a quantidade de números que deseja digitar: ");
	int qtd = scan.nextInt();
	int [] v = new int [qtd];
	int [] v1 = new int [qtd];
		
	//Adicionar os valores do primeiro vetor, e mostrar.
	System.out.println("Primeiro vetor: ");
	for(int i = 0; i<qtd; i++) {
		v[i]= rand.nextInt(10);
		System.out.print(v[i] +"\t");
	}	
	
	//Adicionar os valores do segundo vetor, e mostrar.
	System.out.println("\nSegundo vetor: ");
		for(int i = 0; i<qtd; i++) {
			v1[i]=rand.nextInt(10);
			System.out.print(v1[i]+"\t");
		}
		
		System.out.println("\nNúmeros iguais: ");
		//comparar os dois vetores.
		for(int i=0; i<qtd; i++) {
			for(int j=0; j<qtd;j++) {
				if(v[i] == v1[j] ) {
					int x = v[i];
					System.out.print(x +"\t");
					
				}
			}

	
		}
		
		System.out.println();
	}
}