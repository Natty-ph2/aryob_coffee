import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";

const Qrscanner = () => {
    const [scanResult, setScanResult] = useState<string | null>(null);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height: 250,
            },
            fps: 5,
        }, false);

        // Now passing three arguments: success callback, error callback, and verbose setting
        scanner.render(success, error);

        // success function with typed parameter
        function success(result: string) {
            scanner.clear();
            setScanResult(result);
            window.location.href = result; // Redirect to the scanned URL
        }

        // error function with string type parameter
        function error(errorMessage: string) {
            console.warn(errorMessage); // This will log the error message
        }

    }, []);

    return (
        <div>
            <h1>QR Scanner</h1>
            {scanResult
                ? <div>Success: <a href={"http://" + scanResult}>{scanResult}</a></div>
                : <div id="reader"></div>
            }
            <div>
                <h2>Test QR Code</h2>
                <img src="https://api.qrserver.com/v1/create-qr-code/?data=https://www.example.com&size=200x200" alt="Test QR Code" />
            </div>
        </div>
    );
};

export default Qrscanner;