#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["CuriousOtter.Memorie.GameAPI/CuriousOtter.Memorie.GameAPI.csproj", "CuriousOtter.Memorie.GameAPI/"]
RUN dotnet restore "CuriousOtter.Memorie.GameAPI/CuriousOtter.Memorie.GameAPI.csproj"
COPY . .
WORKDIR "/src/CuriousOtter.Memorie.GameAPI"
RUN dotnet build "CuriousOtter.Memorie.GameAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "CuriousOtter.Memorie.GameAPI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CuriousOtter.Memorie.GameAPI.dll"]