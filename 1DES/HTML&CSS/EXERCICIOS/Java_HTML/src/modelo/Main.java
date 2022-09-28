package modelo;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int opcao = 0;
		Arquivo arq = new Arquivo();

		do {
			System.out.println("0- Escolher um plano de fundo: ");
			System.out.println("1- Escrever uma frase (<h2>): ");
			System.out.println("2- Escrever uma frase menor (<h3>):");
			System.out.println("3- Escrever uma frase como uma lista (<li>): ");
			System.out.println("4- Listar a frase");
			System.out.println("5 - Adicionar uma imagem tamanho real: ");
			System.out.println("6 - Adicionar uma imagem setada (H=300px W=350px)");
			System.out.println("7 - Sair");
			opcao = scan.nextInt();
			scan.nextLine();
			switch (opcao) {
			case 0:
				System.out.println("Cite a cor do plano de fundo em inglês: ");
				String colore = scan.next();

				String color = "<body style=\"background-color:" + colore + "\"/>" + "</body>";

				arq.escrever(color);
				break;
			case 1:
				System.out.println("Informe a frase: ");
				String frase = scan.nextLine();

				String data = "<center><h2>" + frase + "</h2></center>" + " " + "<br>" + "\r\n";

				arq.escrever(data);
				break;

			case 2:
				System.out.println("Informe a frase: ");
				String frasem = scan.nextLine();

				String data1 = "<center><h3>" + frasem + "</h3></center>" + " " + "<br>" + "\r\n";

				arq.escrever(data1);
				break;
			case 3:
				System.out.println("Informe a frase: ");
				String listaa = scan.nextLine();

				String lista = "<center><li>" + listaa + "</li></center>" + " " + "<br>" + "\r\n";

				arq.escrever(lista);

				break;

			case 4:
				ArrayList<String> linhadoArquivo = arq.ler();
				for (String linha : linhadoArquivo) {

					String[] temp = linha.split(";"); // Split quebra as informações. Vai virar duas coisas diferentes.
														// String";"... Retorna em vetores;

					System.out.println("Frase : " + temp[0]);
					System.out.println("-------------------");
				}
				break;

			case 5:
				System.out.println("Cite um link da imagem : ");
				String img1 = scan.nextLine();

				String imagemm = "<center><img src= " + img1 + ">" + "</img></center>" + "<br>" + "\r\n";

				arq.escrever(imagemm);

				break;
			case 6:
				System.out.println("Cite um link da imagem : ");
				String img2 = scan.nextLine();

				String imagem1 = "<center><img src= " + img2 + " height= 300px width= 350px>" + "</img></center>"
						+ "<br>" + "\r\n";

				arq.escrever(imagem1);
				break;

			case 7:
				System.out.println("Até mais.");
				break;

			}
		} while (opcao != 0);
	}
}
