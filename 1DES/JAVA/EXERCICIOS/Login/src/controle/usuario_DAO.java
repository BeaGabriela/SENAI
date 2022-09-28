package controle;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

import modelo.Usuario;

public class usuario_DAO {
	private BufferedReader br;
	private String path = "C:\\Users\\desenvolvimento\\Desktop\\Programas-em-Java\\Login\\dados\\usuarios.csv";
	
	public ArrayList<Usuario> abrir(){
		ArrayList<Usuario> lista = new ArrayList<>();
		Usuario usuario; //Estancia da classe Usuario;
		try {
			br = new BufferedReader(new FileReader(path));
			String linha = br.readLine();
			while(linha != null) {
				usuario = new Usuario(linha);
                lista.add(usuario);
				linha = br.readLine();
			}
			br.close();
		} catch (FileNotFoundException e) {
			System.out.println(e);
		} catch (IOException e) {
			System.out.println(e);
		}
		
		return lista;
	}
}
