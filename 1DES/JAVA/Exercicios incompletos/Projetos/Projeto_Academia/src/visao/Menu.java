package visao;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Scanner;
import modelo.Aparelho;

public class Menu {

		private static SimpleDateFormat df = new SimpleDateFormat ("dd/MM/yyyy");
		private static Scanner scan = new Scanner(System.in);
		private static int opcao = 0;
		static String cadastrar [] = {"Cadastrar Aparelhos", "Listar Aparelhos", "Sair"};
		private static Aparelho[] aparelhos = new Aparelho[10];
		private static int qtdcadastro=0;


			public static void main(String[] args) throws ParseException {
				while(opcao!= 3) {
					System.out.println("Opções: ");
					opcao = menu(cadastrar);
					switch(opcao) {
		 		
		 		case 1:
		 			cadastrarAparelhos();
		 			break;
		 		case 2:
		 			listarAparelhos();
		 			break;
		 		case 3:
		 			System.out.println("Obrigada. Adeus");
		 			break;
		 			default:
		 				System.out.println("Opção inválida");
		 		}
		 		
		 		
				}
		}
			
		 	private static void cadastrarAparelhos() throws ParseException {

		 			System.out.println("Digite os dados dos aparelhos: ");
		 			System.out.println("\nNome\tTipo de Exercicio\t G.Muscular\tData Aquisição\tValor da aquisição");
		 			aparelhos [qtdcadastro] = new Aparelho();
		 			aparelhos[qtdcadastro].nome = scan.next();
		 			aparelhos[qtdcadastro].tipoExercicio = scan.next();
		 			aparelhos[qtdcadastro].grupoMuscular = scan.next();
		 			aparelhos[qtdcadastro].dataAquisicao = df.parse(scan.next());
		 			aparelhos[qtdcadastro].valorAquisicao = scan. nextFloat();
		 			qtdcadastro++;	
				}
		 		
		 		
		 	
		 	
		 	private static void listarAparelhos() {
		 		System.out.println("\nNome\tT. Exercicio\t G.Muscular\tData Aquisição\tValor da aquisição\tTempo de uso");
		 		for (int i = 0; i < qtdcadastro; i++) {
		 			System.out.print(aparelhos[i].toString() + "\t\t\t");
//		 			System.out.print(aparelhos[i].paraString() + "\t\t\t");
		 			System.out.print(aparelhos[i].tempoUso() + "\t");
		 			System.out.println();
		 			System.out.println("Valor depreciado:");		
		 			System.out.println(aparelhos[i].valorDepreciado());
				}
		 		
		 	}
			
		 	// Encapsulamento = privado, apenas os que forem usar em outras classes, é colocado como público.

		 	private static int menu(String[] itens) {
				System.out.println("\t._______________________.");
				for (int i = 0; i < itens.length; i++) {
					System.out.println("\t|" + (i + 1) + "." + itens[i] + "\t|");
				}
				System.out.println("\t:___Escolha uma opção___:");
				return scan.nextInt();
			}
			
		 	

}
