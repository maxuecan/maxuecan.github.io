import { FileLoader } from '../loaders/FileLoader.js'

export default function LoadMyLibs(Files) {

    function load(url) {
        return new Promise((resolve, reject) => {
            const loader = new FileLoader();
            loader.load(url, function(content) {
                const lines = content.split('\n'); 
                addLibsList(lines);
                resolve();
            }, 
            undefined,
            (error) => {
                reject(error);
            });
        });
    }

    function put_lib_file(file_name, lib_path) {
        return new Promise((resolve, reject) => {
            const loader = new FileLoader();
            loader.load(lib_path, function(content) {
                Files.file_save_as.className = 'py';  
                Files.libs_file_save(file_name, content);
                resolve();
            }, 
            undefined,
            (error) => {
                reject(error);
            });
        });
    }

    function addLibsList(libs_list) {
        var container = document.getElementById('myDropdown');
        const split_div = document.createElement('div');
        split_div.classList.add('split-line');
        container.appendChild(split_div);

        libs_list.forEach (line => {
            if (line.includes('.py')) {
                const label = document.createElement('label');
                label.textContent = line;
                container.appendChild(label);
        
                label.addEventListener('click', function() {
                    var lib_path = `./mylibs/${label.textContent}`;
                    var name = label.textContent.replace("\r", "");
                    put_lib_file(name, lib_path);
                });
            }
        });
    }

    load('./mylibs/libs_list.txt')
}

