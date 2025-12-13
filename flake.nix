{
  description = "brod.es";
  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.11";
  inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = { self, nixpkgs, flake-utils }: let
    pkgsFor = system: import nixpkgs {
      inherit system;
    }; in (flake-utils.lib.eachDefaultSystem (system: {
      # envrc
      devShells.default = with (pkgsFor system); mkShell ({
        # workaround for npm/gulp dep compilation
        # https://github.com/imagemin/optipng-bin/issues/108
        shellHook = ''
          LD=$CC
        '';
        nativeBuildInputs = [
          nodejs_latest
          yarn

          awscli

          giflib libjpeg libwebp libpng zlib
        ];
      });
    }));
}

