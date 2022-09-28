package visao;

import java.util.Scanner;
import modelo.Prato;

public class Menu {

			
		private static Scanner scan = new Scanner(System.in);
		private static int opcao = 0;
		static String cadastrar [] = {"Cadastrar Pratos", "Listar Pratos", "Sair"};
		static Prato[] pratos = new Prato[10];
		private static int qtdcadastro=0;


			public static void main(String[] args) {
				while(opcao!= 3) {
					System.out.println("Op��es: ");
					opcao = menu(cadastrar);
					switch(opcao) {
		 		
		 		case 1:
		 			cadastrarPratos();
		 			break;
		 		case 2:
		 			listarPratos();
		 			break;
		 		case 3:
		 			System.out.println("Obrigada. Adeus");
		 			break;
		 			default:
		 				System.out.println("Op��o Inv�lida.");
		 		}
		 		
		 		
				}
		}
			
		 	private static void cadastrarPratos() {

		 			System.out.println("Digite os dados dos pratos: ");
		 			System.out.println("C�digo do prato\t Tipo\tNome\tDescri��o\tPre�o");
		 			pratos [qtdcadastro] = new Prato();
		 			pratos[qtdcadastro].codigoPrato = scan.nextInt();
		 			pratos[qtdcadastro].tipo = scan.next();
		 			pratos[qtdcadastro].nome = scan.next();
		 			pratos[qtdcadastro].descricao = scan.next();
		 			pratos[qtdcadastro].preco = scan.nextFloat();
		 			qtdcadastro++;	
				}
		 		
		 		
		 	
		 	
		 	private static void listarPratos() {
		 		System.out.println("\nC�digo do prato\\tTipo\\tNome\\tDescri��o\\tPre�o");
		 		for (int i = 0; i < qtdcadastro; i++) {
		 			System.out.println(pratos[i].toString());
		 			System.out.println();		
				}
		 		
		 	}
			


		 	private static int menu(String[] itens) {
				System.out.println("\t._______________________.");
				for (int i = 0; i < itens.length; i++) {
					System.out.println("\t|" + (i + 1) + "." + itens[i] + "\t|");
				}
				System.out.println("\t:___Escolha uma op��o___:");
				return scan.nextInt();
			}
			
		 	

}


