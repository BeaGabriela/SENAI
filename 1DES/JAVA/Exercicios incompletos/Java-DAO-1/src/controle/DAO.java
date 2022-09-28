package controle;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

import modelo.Principal;

public class DAO {
		private BufferedReader br;
		private BufferedWriter bw;
		private String entrada = "C:\\Users\\desenvolvimento\\Desktop\\Programas-em-Java\\Java-DAO-1\\dados\\pessoas.csv";
		private String saida = "C:\\Users\\desenvolvimento\\Desktop\\Programas-em-Java\\Java-DAO-1\\dados\\saida.csv";
		
		public ArrayList<Principal> abrir(){
			ArrayList<Principal> linhas = new ArrayList<>();
			Principal p;
			
			try {
				br = new BufferedReader(new FileReader(entrada));
				String li = br.readLine();
				while(li!= null) {
					p = new Principal(li);
					linhas.add(p);
					li = br.readLine();					
				}
				br.close();
			}catch (IOException e) {
				e.printStackTrace();
			}
			return linhas;
			
		}
		public void salvar(ArrayList<Principal> linhas) {
			try {
				bw = new BufferedWriter(new FileWriter(saida));
				for(Principal pri : linhas) {
					bw.write(pri.soma() + "\r\n");
				}
				bw.close();
			}catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

